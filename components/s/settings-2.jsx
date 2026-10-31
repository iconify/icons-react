import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/w/wdx24_2sp.css';
import '../../css/a/awbucqbpf.css';
import '../../css/t/tsgnk6b9n.css';
import '../../css/p/p77vdobsr.css';
import '../../css/i/i49wp7b0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="wdx24_2sp"/><path class="awbucqbpf wm-shine"/><path class="tsgnk6b9n wm-k"/><path class="p77vdobsr wm-a"/><path class="i49wp7b0m wm-deco"/></g>`,
		"fallback": "withicons-kawaii:settings-2",
	});
}

export default Component;
