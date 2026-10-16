import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmefhab7f.css';
import '../../css/l/lw7snlb5i.css';
import '../../css/k/kh901leqw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmefhab7f"/><path class="lw7snlb5i"/><path class="kh901leqw"/>`,
		"fallback": "energy-icons:potentiometer-20-bold",
	});
}

export default Component;
