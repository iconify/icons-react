import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exa-61b8p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exa-61b8p"/>`,
		"fallback": "gravity-ui:logo-yandex-cloud",
	});
}

export default Component;
