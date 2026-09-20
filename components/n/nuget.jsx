import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uow25q6ka.css';
import '../../css/i/iyj96ne-g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="uow25q6ka"/><path class="iyj96ne-g"/>`,
		"fallback": "material-icon-theme:nuget",
	});
}

export default Component;
