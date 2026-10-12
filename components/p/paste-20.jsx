import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg-os2b_i.css';
import '../../css/z/zyzgsactv.css';
import '../../css/c/c_vkhxzzc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xg-os2b_i"/><path class="zyzgsactv"/><path class="c_vkhxzzc"/>`,
		"fallback": "energy-icons:paste-20",
	});
}

export default Component;
