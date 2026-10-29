import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/fqlbot_9u.css';
import '../../css/u/utsgd96vm.css';
import '../../css/r/rlrgvvbrl.css';
import '../../css/s/spev02xtm.css';
import '../../css/q/qw3cslx4k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="fqlbot_9u wm-k"/><path class="utsgd96vm wm-a"/><path class="rlrgvvbrl wm-shadow"/><path class="spev02xtm wm-k"/><path class="qw3cslx4k wm-a"/></g>`,
		"fallback": "withicons:motorcycle-engrave",
	});
}

export default Component;
