import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai6wcvbfj.css';
import '../../css/f/fhh8osb-p.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ai6wcvbfj"/><path class="fhh8osb-p"/>`,
		"fallback": "teenyicons:users-solid",
	});
}

export default Component;
