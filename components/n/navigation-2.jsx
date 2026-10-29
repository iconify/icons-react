import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gtj-y3zca.css';
import '../../css/p/panu4acqz.css';
import '../../css/f/f4nw_jbef.css';
import '../../css/i/io44mw0ld.css';
import '../../css/u/uflmxo-dp.css';
import '../../css/d/d2-4wn6uj.css';
import '../../css/u/u4grshb6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gtj-y3zca wm-shadow"/><path class="panu4acqz wm-k"/><path class="f4nw_jbef wm-k"/><path class="io44mw0ld wm-k"/><path class="uflmxo-dp wm-k"/><path class="d2-4wn6uj wm-k"/><path class="u4grshb6g wm-shine"/>`,
		"fallback": "withicons-pastel:navigation-2",
	});
}

export default Component;
