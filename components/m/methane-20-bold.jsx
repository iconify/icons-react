import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rz2bs4vlk.css';
import '../../css/e/ej03xab5i.css';
import '../../css/u/u3lzsvbcn.css';
import '../../css/x/xoa7shbml.css';
import '../../css/w/wrdg80bvl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rz2bs4vlk"/><path class="ej03xab5i"/><path class="u3lzsvbcn"/><path class="xoa7shbml"/><path class="wrdg80bvl"/>`,
		"fallback": "energy-icons:methane-20-bold",
	});
}

export default Component;
