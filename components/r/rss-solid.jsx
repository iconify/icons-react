import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/libkqqbsb.css';
import '../../css/u/u44crn52a.css';
import '../../css/a/af5m2ccgv.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="libkqqbsb"/><path clip-rule="evenodd" class="u44crn52a"/><path class="af5m2ccgv"/>`,
		"fallback": "teenyicons:rss-solid",
	});
}

export default Component;
