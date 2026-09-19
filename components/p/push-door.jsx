import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/g/gopl26bnm.css';
import '../../css/q/q07j-7b5y.css';
import '../../css/m/mscbw7bhq.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGg2vuub6t"><g class="wwvp95byt"><path class="gopl26bnm"/><path class="q07j-7b5y"/><path class="mscbw7bhq"/></g></mask></defs><path mask="url(#SVGg2vuub6t)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:push-door",
	});
}

export default Component;
