import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7qryknqk.css';
import '../../css/d/dapqhqo4d.css';
import '../../css/e/ef6l9pblb.css';
import '../../css/j/j2g35xbqc.css';
import '../../css/p/pvvjkfbmq.css';

const viewBox = {"width":1216,"height":200,"left":32,"top":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g mask="url(#SVGEVjz3boG)"><mask id="SVGEVjz3boG"><path class="n7qryknqk"/></mask><g class="dapqhqo4d svg-content" clip-path="url(&quot;#b&quot;)" transform="translate(32 32)"><path fill="url(&quot;#c&quot;)" class="ef6l9pblb"/><path fill="url(&quot;#d&quot;)" class="j2g35xbqc"/><path fill="url(&quot;#e&quot;)" class="pvvjkfbmq"/></g></g>`,
		"fallback": "thesvg-color:microsoft-viva-glint",
	});
}

export default Component;
