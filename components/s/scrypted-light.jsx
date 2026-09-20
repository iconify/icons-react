import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qdb-lt2fu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qdb-lt2fu"/>`,
		"fallback": "selfhst:scrypted-light",
	});
}

export default Component;
