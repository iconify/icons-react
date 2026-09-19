import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/n/n4hxxk--c.css';
import '../../css/e/ehbze3eqr.css';
import '../../css/j/j2zc1ug1g.css';
import '../../css/a/aqk8hqzbn.css';
import '../../css/s/snv7qzlxz.css';
import '../../css/i/iwype9b_a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="n4hxxk--c"/><path class="ehbze3eqr"/><path class="j2zc1ug1g"/><path class="aqk8hqzbn"/><path class="snv7qzlxz"/><path class="iwype9b_a"/></g>`,
		"fallback": "icon-park:list-bottom",
	});
}

export default Component;
