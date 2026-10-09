import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgtjrif2l.css';
import '../../css/f/fq3i4bq5e.css';
import '../../css/o/og-ht9b2j.css';
import '../../css/p/ptdxgubpt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgtjrif2l"/><path class="fq3i4bq5e"/><path class="og-ht9b2j"/><path class="ptdxgubpt"/>`,
		"fallback": "energy-icons:supermarket-20",
	});
}

export default Component;
