import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukk_oybpm.css';
import '../../css/u/u-7z_t4fb.css';
import '../../css/v/v-q4e7xtu.css';
import '../../css/j/ju0jd-e1r.css';
import '../../css/u/us33y-a5m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukk_oybpm"/><path class="u-7z_t4fb"/><path class="v-q4e7xtu"/><path class="ju0jd-e1r"/><path class="us33y-a5m"/>`,
		"fallback": "selfhst:nps-enhanced-light",
	});
}

export default Component;
