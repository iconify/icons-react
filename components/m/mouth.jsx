import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdaolxbzk.css';
import '../../css/f/fi8cawb-a.css';
import '../../css/z/zr7rfacfr.css';
import '../../css/c/czwnylnsc.css';
import '../../css/w/wyaupcbhr.css';
import '../../css/g/gptncvxfq.css';
import '../../css/p/pecpz1b3a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdaolxbzk"/><path class="fi8cawb-a"/><path class="zr7rfacfr"/><path class="czwnylnsc"/><path class="wyaupcbhr"/><path class="gptncvxfq"/><path class="pecpz1b3a"/>`,
		"fallback": "streamline-emojis:mouth",
	});
}

export default Component;
