import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akkkpkbzd.css';
import '../../css/j/jbxar0t6m.css';
import '../../css/f/flqk8ac0w.css';
import '../../css/h/h9ftfmbbj.css';
import '../../css/l/ljd0s_bvm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akkkpkbzd"/><path class="jbxar0t6m"/><path class="flqk8ac0w"/><path class="h9ftfmbbj"/><circle class="ljd0s_bvm"/>`,
		"fallback": "ooui:logo-wikispecies",
	});
}

export default Component;
