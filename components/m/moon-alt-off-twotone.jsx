import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byfyte.css';
import '../../css/t/t5pxry.css';
import '../../css/z/zxndow.css';
import '../../css/f/f32okk.css';
import '../../css/m/m9pw2i.css';
import '../../css/y/y4wbml.css';
import '../../css/c/c6u95x.css';
import '../../css/r/rhg2sy.css';
import '../../css/a/a91obn.css';
import '../../css/o/oxx-om.css';
import '../../css/b/botfzx.css';
import '../../css/g/gd_4-q.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-56.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG0hk7QdXz"><path class="byfyte t5pxry zxndow"/><path class="f32okk m9pw2i y4wbml zxndow"/><path class="c6u95x m9pw2i y4wbml zxndow"/><path class="m9pw2i rhg2sy y4wbml zxndow"/><path class="a91obn oxx-om t5pxry y4wbml"/></mask></defs><path mask="url(#SVG0hk7QdXz)" class="botfzx"/><path class="a91obn gd_4-q t5pxry y4wbml"/>`,
		"fallback": "line-md:moon-alt-off-twotone",
	});
}

export default Component;
