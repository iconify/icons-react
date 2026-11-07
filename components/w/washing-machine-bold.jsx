import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kod2frlkh.css';
import '../../css/k/k_dz1obwi.css';
import '../../css/t/tr03jc-wq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kod2frlkh"/><path class="k_dz1obwi"/><path clip-rule="evenodd" class="tr03jc-wq"/>`,
		"fallback": "solar:washing-machine-bold",
	});
}

export default Component;
