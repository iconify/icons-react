import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vuxggqbqp.css';
import '../../css/m/mq95odb1g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vuxggqbqp"/><path class="mq95odb1g"/>`,
		"fallback": "nimbus:link",
	});
}

export default Component;
