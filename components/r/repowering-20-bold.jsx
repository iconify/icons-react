import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqk1cmb9r.css';
import '../../css/n/nqlwmj21u.css';
import '../../css/n/n84jjux7v.css';
import '../../css/u/uy9krfbsd.css';
import '../../css/n/n59ocrfbw.css';
import '../../css/y/ydc6ylmap.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqk1cmb9r"/><path class="nqlwmj21u"/><path class="n84jjux7v"/><path class="uy9krfbsd"/><path class="n59ocrfbw"/><path class="ydc6ylmap"/>`,
		"fallback": "energy-icons:repowering-20-bold",
	});
}

export default Component;
