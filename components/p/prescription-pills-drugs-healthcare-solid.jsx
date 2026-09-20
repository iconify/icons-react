import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdz5_tljs.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hdz5_tljs"/>`,
		"fallback": "streamline-flex:prescription-pills-drugs-healthcare-solid",
	});
}

export default Component;
