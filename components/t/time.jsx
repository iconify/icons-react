import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um-rl65_a.css';
import '../../css/t/tri62lhrx.css';
import '../../css/b/bqonxyhrw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="um-rl65_a"/><path class="tri62lhrx"/><path class="bqonxyhrw"/>`,
		"fallback": "token:time",
	});
}

export default Component;
