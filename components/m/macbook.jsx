import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uuxa2bb1c.css';
import '../../css/e/ex1_iqkbv.css';
import '../../css/s/sibyveg8p.css';
import '../../css/n/nzylh7bdh.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uuxa2bb1c"/><path clip-rule="evenodd" class="ex1_iqkbv"/><path clip-rule="evenodd" class="sibyveg8p"/><path clip-rule="evenodd" class="nzylh7bdh"/>`,
		"fallback": "flat-ui:macbook",
	});
}

export default Component;
