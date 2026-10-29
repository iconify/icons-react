import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qar66zblb.css';
import '../../css/v/vn3ejy6yj.css';
import '../../css/a/a_miq4bhp.css';
import '../../css/i/i10thab8l.css';
import '../../css/l/ltxj3vb3r.css';
import '../../css/t/t4q9hwpzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qar66zblb wm-shadow"/><path class="vn3ejy6yj wm-k"/><path class="a_miq4bhp wm-k"/><path class="i10thab8l wm-k"/><path class="ltxj3vb3r wm-k"/><path class="t4q9hwpzk wm-shine"/>`,
		"fallback": "withicons-pastel:type",
	});
}

export default Component;
