import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wylbpob6x.css';
import '../../css/m/mfmk55b6h.css';
import '../../css/x/x4u8pbwjc.css';
import '../../css/x/xzsdyccou.css';
import '../../css/i/icawvsbki.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/a/aa69xwzep.css';
import '../../css/q/qwuhqkb9a.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wylbpob6x"/><path class="mfmk55b6h"/><g class="x4u8pbwjc"><circle class="xzsdyccou"/><path class="icawvsbki"/></g><g class="x8poo_bjf"><circle class="xzsdyccou"/><path class="aa69xwzep"/><path class="qwuhqkb9a"/></g>`,
		"fallback": "openmoji:person-climbing",
	});
}

export default Component;
