import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m99dslsql.css';
import '../../css/d/dju16bcaj.css';
import '../../css/q/q5tmzt_ie.css';
import '../../css/v/vq5ukvb_p.css';
import '../../css/v/vg8_g8bwx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m99dslsql"/><path class="dju16bcaj"/><path class="q5tmzt_ie"/><path class="vq5ukvb_p"/><path class="vg8_g8bwx"/>`,
		"fallback": "energy-icons:recycling-bin-48",
	});
}

export default Component;
