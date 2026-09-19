import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aql7dnt-u.css';
import '../../css/k/kv2m18g6m.css';
import '../../css/w/w1u_bpdsb.css';
import '../../css/v/voz9ctthh.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGHpuIjbYp"><g class="aql7dnt-u"><path class="kv2m18g6m"/><path class="w1u_bpdsb"/><path class="voz9ctthh"/></g></mask></defs><path mask="url(#SVGHpuIjbYp)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:teapot",
	});
}

export default Component;
