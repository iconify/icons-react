import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adb5y7bnp.css';
import '../../css/o/og-ht9b2j.css';
import '../../css/f/fqwob5ben.css';
import '../../css/d/dzbcu0b0a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adb5y7bnp"/><path class="og-ht9b2j"/><path class="fqwob5ben"/><path class="dzbcu0b0a"/>`,
		"fallback": "energy-icons:kiln-20",
	});
}

export default Component;
