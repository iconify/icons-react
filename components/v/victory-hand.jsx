import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/b/bx9sggcti.css';
import '../../css/y/yxx8ictdt.css';
import '../../css/c/cwkfk7b9f.css';
import '../../css/m/mlg7_-bzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="bx9sggcti"/><path class="yxx8ictdt"/><path class="cwkfk7b9f"/><path class="mlg7_-bzu"/></g>`,
		"fallback": "akar-icons:victory-hand",
	});
}

export default Component;
