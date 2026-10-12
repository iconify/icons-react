import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhs8peimt.css';
import '../../css/x/xuaqg0a7u.css';
import '../../css/g/gbjmahy1r.css';
import '../../css/b/bbxn-dufo.css';
import '../../css/k/kem81wb3i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhs8peimt"/><path class="xuaqg0a7u"/><path class="gbjmahy1r"/><path class="bbxn-dufo"/><path class="kem81wb3i"/>`,
		"fallback": "energy-icons:key-plus-48",
	});
}

export default Component;
