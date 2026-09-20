import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o7mengndu.css';
import '../../css/x/x8g92mb0e.css';
import '../../css/s/s6nrs-uoq.css';
import '../../css/t/tvu2m2_ce.css';
import '../../css/i/ijwfigb7k.css';
import '../../css/h/he4anlbpa.css';
import '../../css/f/frw01kbsp.css';
import '../../css/n/n2489sbxz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o7mengndu"/><path class="x8g92mb0e"/><path class="s6nrs-uoq"/><path class="tvu2m2_ce"/><path class="ijwfigb7k"/><path class="he4anlbpa"/><path class="frw01kbsp"/><path class="n2489sbxz"/>`,
		"fallback": "streamline-emojis:pool-8-ball",
	});
}

export default Component;
