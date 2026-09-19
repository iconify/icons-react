import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/s/s3--xqbfi.css';
import '../../css/m/m523p2l3w.css';
import '../../css/o/ocbtnl2hf.css';
import '../../css/j/j2sqa-b2x.css';
import '../../css/t/tjlvrohtz.css';
import '../../css/f/f9x76rbft.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><ellipse class="s3--xqbfi"/><path class="m523p2l3w"/><path class="ocbtnl2hf"/><path class="j2sqa-b2x"/><path class="tjlvrohtz"/><path class="f9x76rbft"/></g>`,
		"fallback": "icon-park:tree-one",
	});
}

export default Component;
