import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/e/ef4d19eyw.css';
import '../../css/e/ehbze3eqr.css';
import '../../css/r/r_kazmkpl.css';
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
		"content": `<g class="a0a9vkbzg"><path class="ef4d19eyw"/><path class="ehbze3eqr"/><path class="r_kazmkpl"/><path class="aqk8hqzbn"/><path class="snv7qzlxz"/><path class="iwype9b_a"/></g>`,
		"fallback": "icon-park:list-middle",
	});
}

export default Component;
