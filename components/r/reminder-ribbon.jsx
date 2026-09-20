import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uk6lyrbfc.css';
import '../../css/l/lpm14mvjr.css';
import '../../css/s/shxtxmbiv.css';
import '../../css/r/rcxz1fmas.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uk6lyrbfc"/><path class="lpm14mvjr"/><path class="shxtxmbiv"/><path class="rcxz1fmas"/>`,
		"fallback": "openmoji:reminder-ribbon",
	});
}

export default Component;
