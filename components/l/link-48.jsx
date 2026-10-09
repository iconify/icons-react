import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fh22bq98t.css';
import '../../css/x/x37i8o26b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fh22bq98t"/><path class="x37i8o26b"/>`,
		"fallback": "energy-icons:link-48",
	});
}

export default Component;
