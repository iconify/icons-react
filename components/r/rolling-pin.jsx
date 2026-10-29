import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trwdbf92m.css';
import '../../css/o/okzcyibiy.css';
import '../../css/h/hocp7pbvu.css';
import '../../css/m/mk9x21b6p.css';
import '../../css/u/u4juocb7b.css';
import '../../css/m/mp2n5bbgi.css';
import '../../css/i/i4hltq5ka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trwdbf92m wm-shadow"/><path class="okzcyibiy"/><path class="hocp7pbvu"/><path class="mk9x21b6p"/><path class="u4juocb7b"/><path class="mp2n5bbgi wm-shine"/><path class="i4hltq5ka"/>`,
		"fallback": "withicons-plush:rolling-pin",
	});
}

export default Component;
