import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhtvuhbew.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zu8etlbik.css';
import '../../css/j/jgg7csooc.css';
import '../../css/y/yh9fwdbvj.css';
import '../../css/n/ndhnifpcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary vhtvuhbew"/><g class="dt0cm9dhy primary"><path class="zu8etlbik"/><path class="jgg7csooc"/><path class="yh9fwdbvj"/><path class="ndhnifpcl"/></g>`,
		"fallback": "iconaut:markdown-duo",
	});
}

export default Component;
