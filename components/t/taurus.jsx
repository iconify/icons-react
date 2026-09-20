import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/njfdkhbvf.css';
import '../../css/f/fczeytlne.css';
import '../../css/x/xb5-t2qju.css';
import '../../css/v/vo71evf5d.css';
import '../../css/i/iwjpwmbrj.css';
import '../../css/z/z6oq4ccrx.css';
import '../../css/e/e4zfowz9r.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="njfdkhbvf"><circle class="fczeytlne"/><path class="xb5-t2qju"/></g><path class="vo71evf5d"/><circle class="iwjpwmbrj"/><path class="z6oq4ccrx"/><path class="e4zfowz9r"/>`,
		"fallback": "openmoji:taurus",
	});
}

export default Component;
