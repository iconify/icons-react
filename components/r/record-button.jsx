import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cog56gb0n.css';
import '../../css/v/v9lk8ib_s.css';
import '../../css/h/hf1-0pb9l.css';
import '../../css/w/wtahhnbyg.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="cog56gb0n"/><circle class="v9lk8ib_s"/><circle class="hf1-0pb9l"/><circle class="wtahhnbyg"/>`,
		"fallback": "openmoji:record-button",
	});
}

export default Component;
