import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w2327-tyh.css';
import '../../css/e/emweeejoz.css';
import '../../css/r/r6vad2uub.css';
import '../../css/x/x7-f5dbjn.css';
import '../../css/d/db3lu7bhd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="w2327-tyh"/><path class="emweeejoz"/><path class="r6vad2uub"/><path class="x7-f5dbjn"/><path class="db3lu7bhd"/>`,
		"fallback": "selfhst:microsoft-access-2018-dark",
	});
}

export default Component;
