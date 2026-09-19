import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tcxv1dboh.css';
import '../../css/g/gjxkdkbcj.css';
import '../../css/s/s5ic0sbzt.css';
import '../../css/a/a1x-yd-fr.css';
import '../../css/x/x08wk1hjm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGgXaznekf"><g class="ft5dv1b6b"><path class="tcxv1dboh"/><path class="gjxkdkbcj"/><circle class="s5ic0sbzt"/><path class="a1x-yd-fr"/><circle class="x08wk1hjm"/></g></mask></defs><path mask="url(#SVGgXaznekf)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:shopping-bag",
	});
}

export default Component;
