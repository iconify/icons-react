import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljj5lbnaa.css';
import '../../css/o/o7a58mbsb.css';
import '../../css/f/fruy1-c_a.css';
import '../../css/y/y_dajcvjj.css';
import '../../css/n/nps6-ccvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ljj5lbnaa"/><path class="o7a58mbsb"/><path class="fruy1-c_a"/><path class="y_dajcvjj"/><path clip-rule="evenodd" class="nps6-ccvx"/>`,
		"fallback": "token:uni",
	});
}

export default Component;
