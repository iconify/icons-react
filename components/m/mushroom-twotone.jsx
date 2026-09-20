import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vuns_p.css';
import '../../css/y/ydovum.css';
import '../../css/a/a0m25c.css';
import '../../css/t/tt3b6d.css';
import '../../css/s/s9nboe.css';
import '../../css/k/kqeuxs.css';
import '../../css/x/xa0t5z.css';
import '../../css/a/awinxh.css';
import '../../css/u/uo00fr.css';
import '../../css/f/fill-to-0.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-from-14.css';
import '../../css/s/so-to-0.css';
import '../../css/r/r-to-0px.css';
import '../../css/r/r-to-2px.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vuns_p ydovum"/><path class="a0m25c tt3b6d"/><path class="a0m25c s9nboe"/><circle class="kqeuxs xa0t5z ydovum"/><circle class="awinxh kqeuxs ydovum"/><circle class="kqeuxs uo00fr ydovum"/>`,
		"fallback": "line-md:mushroom-twotone",
	});
}

export default Component;
