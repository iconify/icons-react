import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/riomwtb3m.css';
import '../../css/x/xcwrauxib.css';
import '../../css/l/ltwci7nut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="riomwtb3m"/><path class="xcwrauxib"/><path class="ltwci7nut"/>`,
		"fallback": "token:planets",
	});
}

export default Component;
