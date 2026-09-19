import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whshsh-ji.css';
import '../../css/w/w5vciu9yy.css';
import '../../css/w/wtfmx7b3v.css';
import '../../css/n/n2tfkjblv.css';
import '../../css/j/j9wt5cc4j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whshsh-ji"/><path class="w5vciu9yy"/><g class="wtfmx7b3v"><path class="n2tfkjblv"/><path class="j9wt5cc4j"/></g>`,
		"fallback": "flat-color-icons:lock-landscape",
	});
}

export default Component;
