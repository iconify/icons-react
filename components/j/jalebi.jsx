import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/u/uxrwcgbvs.css';
import '../../css/t/tuttxcc6d.css';
import '../../css/a/aoc9rf24c.css';
import '../../css/n/n1va0bchb.css';
import '../../css/i/ii1hn--6r.css';
import '../../css/i/iqhjyybzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="uxrwcgbvs wm-shadow"/><path class="tuttxcc6d"/><path class="aoc9rf24c"/><path class="n1va0bchb"/><path class="ii1hn--6r wm-deco"/><path class="iqhjyybzt wm-deco"/></g>`,
		"fallback": "withicons-sticker:jalebi",
	});
}

export default Component;
