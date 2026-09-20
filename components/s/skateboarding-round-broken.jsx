import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nm6bgbcos.css';
import '../../css/p/pyd8uurcz.css';
import '../../css/g/g674ibbjw.css';
import '../../css/i/iucsj8b6e.css';
import '../../css/n/n9vqu6frf.css';
import '../../css/k/kg7-urb4q.css';
import '../../css/b/b96xznzsu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="nm6bgbcos"/><circle class="pyd8uurcz"/><path class="g674ibbjw"/><path class="iucsj8b6e"/><path class="n9vqu6frf"/><path class="kg7-urb4q"/><path class="b96xznzsu"/></g>`,
		"fallback": "solar:skateboarding-round-broken",
	});
}

export default Component;
