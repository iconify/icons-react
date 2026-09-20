import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fkkinuhjw.css';
import '../../css/g/gtrrzp07a.css';
import '../../css/m/m08-abbvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fkkinuhjw"/><path class="gtrrzp07a"/><path clip-rule="evenodd" class="m08-abbvo"/>`,
		"fallback": "token:revv",
	});
}

export default Component;
