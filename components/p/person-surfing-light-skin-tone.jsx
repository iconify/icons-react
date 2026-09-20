import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f657yvg-i.css';
import '../../css/i/ig-dzq6hv.css';
import '../../css/i/i2wvy_wgy.css';
import '../../css/r/r4hn0mbcy.css';
import '../../css/x/x8poo_bjf.css';
import '../../css/d/de0_phkht.css';
import '../../css/r/r2xtw7bor.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f657yvg-i"/><g class="ig-dzq6hv"><circle class="i2wvy_wgy"/><path class="r4hn0mbcy"/></g><g class="x8poo_bjf"><circle class="i2wvy_wgy"/><path class="de0_phkht"/><path class="r2xtw7bor"/></g>`,
		"fallback": "openmoji:person-surfing-light-skin-tone",
	});
}

export default Component;
