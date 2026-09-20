import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz_z2dbnt.css';
import '../../css/s/swgb96d4x.css';
import '../../css/m/m_yjw2b7s.css';
import '../../css/e/egnlvvb2x.css';
import '../../css/l/lz7k-95pn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wz_z2dbnt"/><path class="swgb96d4x"/><path class="m_yjw2b7s"/><path class="egnlvvb2x"/><path class="lz7k-95pn"/>`,
		"fallback": "streamline-pixel:interface-essential-search-binocular",
	});
}

export default Component;
