import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vicux7euw.css';
import '../../css/h/h2h7ntlaq.css';
import '../../css/u/u3ul26h3f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vicux7euw"/><path class="h2h7ntlaq"/><path class="u3ul26h3f"/></g>`,
		"fallback": "streamline-ultimate:science-molecule-strucutre",
	});
}

export default Component;
